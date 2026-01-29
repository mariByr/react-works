//створюємо функцію щоб витягувати токен з локалсториджа.аргумент буде ключ.Спочатку витягуємо в змінну тоді,робим перевірку на
//якщо все ок то створюємо змінну parse яку типізуємо <T>яка буде вже спарсеним токеном ,повертаємо її

export const retriveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;

}
