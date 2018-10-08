export class Detect {
  static supportsWebSocket() : boolean {
    // return window.WebSocket || window.MozWebSocket;
    return true; // because usually true, but this is actually not used anywhere in code.
  };

  static userAgentContains(value: string) : boolean {
    return navigator.userAgent.indexOf(value) !== -1;
  };

  // isTablet()
  // I don't love this one... this is original code. [MAD]
  static isTablet(screenWidth) : boolean {
    if (screenWidth > 640) {
      if ((this.userAgentContains('Android') && this.userAgentContains('Firefox'))
        || this.userAgentContains('Mobile')) {
        return true;
      }
    }
    return false;
  };

  static isWindows() : boolean {
    return this.userAgentContains('Windows');
  }

  static isChromeOnWindows() : boolean {
    return this.userAgentContains('Chrome') && this.userAgentContains('Windows');
  };

  static canPlayOGG() : boolean {
    // return Modernizr.audio.mp3;
    var elem : HTMLAudioElement = document.createElement('audio');
    if (typeof elem.canPlayType == 'function') {
      if (elem.canPlayType('audio/ogg; codecs="vorbis"') == 'probably') {
        return true;
      } 
    } 
    return false;
  };

  static isSafari() : boolean {
    return this.userAgentContains('Safari') && !this.userAgentContains('Chrome');
  };

  static isOpera() : boolean {
    return this.userAgentContains('Opera');
  };

  // isIOS()
  // Seems to be true regardless of browser used on iOS devices.
  static isIOS() : boolean {
    return this.userAgentContains('AppleWebKit');
  }
}
