export const isJSON = (str: string, options?: any) => {
  function merge(obj: any = {}, defaults: any) {
    for (const key in defaults) {
      if (typeof obj[key] === "undefined") {
        obj[key] = defaults[key];
      }
    }
    return obj;
  }
  function assertString(input: any) {
    const isString = typeof input === "string" || input instanceof String;

    if (!isString) {
      let invalidType: any = typeof input;
      if (input === null) invalidType = "null";
      else if (invalidType === "object") invalidType = input.constructor.name;

      throw new TypeError(`Expected a string but received a ${invalidType}`);
    }
  }
  assertString(str);
  const default_json_options = {
    allow_primitives: false,
  };
  try {
    options = merge(options, default_json_options);
    let primitives: any = [];
    if (options.allow_primitives) {
      primitives = [null, false, true];
    }

    const obj: any = JSON.parse(str);
    return primitives.includes(obj) || (!!obj && typeof obj === "object");
  } catch (e) {
    /* ignore */
  }
  return false;
};