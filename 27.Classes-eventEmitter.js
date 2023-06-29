class EventEmitter {
  constructor() {
    this.subscriberMap = {};
  }
  subscribe(event, cb) {
    if (event in this.subscriberMap) {
      this.subscriberMap[event].push(cb);
    } else {
      this.subscriberMap[event] = [cb];
    }

    return {
      unsubscribe: () => {
        this.subscriberMap[event] = this.subscriberMap[event].filter(
          (f) => f !== cb
        );
        if (this.subscriberMap[event].length === 0)
          delete this.subscriberMap[event];
      },
    };
  }

  emit(event, args = []) {
    let res = [];
    if (!(event in this.subscriberMap) || !this.subscriberMap[event].length)
      return [];
    for (const callback of this.subscriberMap[event]) {
      res.push(callback(...args));
    }
    return res;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
