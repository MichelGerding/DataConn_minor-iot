levels = [
    'info', 'debug'
]

class Logger:

    def __init__(self, level) -> None:
        self.level = levels.index(level)

    def debug(self, msg):
        if self.level >= 1:
            print(msg)

    def info(self, msg): 
        if self.level >= 0:
            print(msg)