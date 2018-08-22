var MineSweeperMAp = /** @class */ (function () {
    function MineSweeperMAp(Entrymap) {
        this.map = Entrymap;
    }
    MineSweeperMAp.prototype.getmap = function () {
        return this.map;
    };
    return MineSweeperMAp;
}());
var Entrymap = [[2, 3, 4], [3, 5, 4]];
var gamemap = new MineSweeperMAp(Entrymap);
console.log(gamemap.getmap());
