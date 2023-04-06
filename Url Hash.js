const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);

myURL.hash = 'baz';
console.log(myURL.href);