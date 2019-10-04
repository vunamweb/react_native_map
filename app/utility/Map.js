export default class Map {
    constructor(map) {
        this.map = map;
    }

    animateToRegion(newRegion, time) {
        this.map.animateToRegion(newRegion, time);
    }
}