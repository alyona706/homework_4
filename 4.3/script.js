let userBirthYear = parseInt(prompt('Введіть свій рік народження', ''));

if (!userBirthYear) {
    alert('Шкода, що Ви не захотіли ввести свій вік.');
} else {
    let userCity = prompt('Введіть місто, в якому живете', '');

    if (!userCity) {
        alert('Шкода, що Ви не захотіли ввести місто, в якому ви живете.');
    } else {
        let userFavSport = prompt('Який ваш улюблений вид спорту?', '');

        if (!userFavSport) {
            alert('Шкода, що Ви не захотіли ввести ваш улюблений спорт.');
        } else {
            const currentYear = new Date().getFullYear();
            let userAge = currentYear - userBirthYear;
            let cityMessage, favSportMessage, userMessage;

            switch(capitalize(userCity)) {
                case 'Київ':
                    cityMessage = 'Ти живеш у столиці України';
                    break;
                case 'Вашингтон':
                    cityMessage = 'Ти живеш у столиці США';
                    break;
                case 'Лондон':
                    cityMessage = 'Ти живеш у столиці Великобританії';
                    break;
                default:
                    cityMessage = `Ти живеш у місті ${capitalize(userCity)}`;
                    break;
            }

            switch(userFavSport) {
                case 'тенніс':
                    favSportMessage = 'Круто! Хочеш стати як Рафаель Надаль?';
                    break;
                case 'formula 1':
                    favSportMessage = 'Круто! Хочеш стати як Макс Ферстапен?';
                    break;
                case 'баскетбол':
                    favSportMessage = 'Круто! Хочеш стати як Майкл Джордан?';
                    break;
            }

            userMessage = `Твій вік ${userAge}. ${cityMessage}. ${favSportMessage}`;
            alert(userMessage);
        }
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}