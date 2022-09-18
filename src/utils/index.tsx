import md5 from 'md5';

export function convertFirstToUpperCase(text: string) {
  const result = text[0].toUpperCase() + text.substring(1)

  return result
}

export function limitDescription(description: string) {
  if (window.innerWidth >= 2000) {
    return description.substring(0, 400) + '...'
  } else if (window.innerWidth <= 1024) {
    return description.substring(0, 50) + '...'
  } else {
    return description.substring(0, 160) + '...'
  }
}


export function hashPassword(username: any, password: any) {
  var first = username.toLowerCase().replace(/( )+/g, "");
  var second = password.replace(/( )+/g, "");
  return md5(first + second + "login");
}

export function parseLoginResponse(name: any, string: any) {
  return string.split(/\r?\n/).reduce((acc: any, line: any) => {
      var args = line.split("=");
      if (args[0] == "answer") {
          acc.answer = args[1];
      }

      if (args[0] == "token") {
          acc.token = args[1];
      }

      if (args[0].startsWith("name")) {
          acc.characters.push({
              name: args[1]
          })
      }

      if (args[0].startsWith("sex")) {
          acc.characters[acc.characters.length - 1].sex = args[1]
      }

      return acc;
  }, {
      answer: "fail",
      token: null,
      characters: [],
      name: name,
      isSuccessfull: function() { return this.answer == "ok"; }
  });
}


