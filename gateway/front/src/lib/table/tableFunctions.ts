
export type formatFunc = (data: any, key?: string) => string;
export function defaultFormat(d: any, k = 'header') {
    if (k == 'trackLength') {
        return d + ' km';
    }

    if (k == 'header') {
        if (d == 'dateTime') {
            return 'date';
        }

        if (d instanceof String) {
            return d.replace(/([a-z])([A-Z])/g, `$1 $2`);
        }

        return d;
    }

    if (typeof d == 'string') {
        if (/<\/?[a-z][\s\S]*>/i.test(d)) {
            return d;
        }
    }

    if (d instanceof Date) {
        // check if it is a date
        return d.toLocaleDateString(navigator.language, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });
    }

    return d;
}

export enum SortDirection { 'ASC', 'DESC' };
export type SortState = { column: string, direction: SortDirection }
export type SortFunc = (sortState: SortState, data: any[]) => any[];

export function defaultSort(sortState: SortState, data: any[]) {
    return data.sort((a: any, b: any) => {

        let s = 0;

        let av = a[sortState.column];
        let bv = b[sortState.column];

        if (av instanceof Date) {
            av = av.valueOf()
            bv = bv.valueOf()
        }

        if (typeof av == 'string') {
            av = av.replace(/<\/?[^>]+(>|$)/g, '');
            bv = bv.replace(/<\/?[^>]+(>|$)/g, '');
        }

        if (av > bv) {
            s = -1;
        } else if (av < bv) {
            s = 1;
        } else {
            return 0;
        }

        return s * (sortState.direction == SortDirection.ASC ? -1 : 1);
    });
}