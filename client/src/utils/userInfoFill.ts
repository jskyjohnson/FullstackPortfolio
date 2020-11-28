import {userinfo} from 'data/userinfo'

//test

export const userInfoFill = (str: string, repl_string?: string) => {
  if (repl_string) {
    const re = new RegExp("%userinfo%", "g");
    return str.replace(re, repl_string);
  } else {
		const re = new RegExp("%userinfo%", "g");
    return str.replace(re, userinfo.title_name);
  }
};
