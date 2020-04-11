export default class Navigation {
    constructor(navigation) {
        this.navigation = navigation;
    }

    gotoScreen(screen) {
        this.navigation.navigate(screen, {
            itemId: 86,
            name: 'vunam',
          })
    }
}