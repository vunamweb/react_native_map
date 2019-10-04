class Gps {
  constructor(component) {
    //this.component = component;
    this.timeout = 5000;
    this.maximumAge = 1000;
  }

  findCoordinates(success, error_) {
    navigator.geolocation.getCurrentPosition(
      position => {
        success(position);
        //this.component.success(position);
      },
      error => error(error_), //this.component.error(error),
      { enableHighAccuracy: false, timeout: this.timeout, maximumAge: this.maximumAge }
    );
  };
}

const gps = new Gps();
export default gps;