// Задание 5 модуля, "Управление потоком"
const greetingLang = prompt('На каком языке Вас приветствовать?');

switch (greetingLang) {
  case 'ru':
    console.log('Здравствуйте');
    break;
  case 'en':
    console.log('Hello');
    break;
  case 'de':
    console.log('Guten Tag!');
    break;
  case 'cnh':
    console.log('你好！。');
    break;
    default:
    console.log('Язык не задан!');
}