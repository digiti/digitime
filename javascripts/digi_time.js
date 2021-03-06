/*
 * Convert regular time to DigiTime
 */
var DigiTime = function(value) {
  this.time    = value;
  this.hours   = this.time.split(':')[0];
  this.minutes = this.time.split(':')[1];
}

DigiTime.prototype = (function() {
  var convertMinutes = function(minutes) {
    console.log(minutes)
    if (minutes > 0) {
      minutes = (minutes / 60)
        .toString()
        .split('.')[1]
        .substr(0,2);
    }

    return minutes;
  }

  return {
    convert: function() {
      return this.hours + "." + convertMinutes(this.minutes);
    }
  }
})();
