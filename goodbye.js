let name = prompt('Name');

if (name === 'Alex') {
    console.log('хорошо');
    let pin = prompt('пин-код');
    
    if (pin >= 7777) {
        // let balance = prompt('сколько ты хочешь снимать');
        
        // if (balance <= 10000 ) {
        //     console.log('Спасибо');
        //     alert('Спасибо');

        //     let initialBalance = 10000;
        //     let remainingBalance = initialBalance - balance;

        //     console.log(`Остаток на карте: ${remainingBalance}`);
        //     alert(`Остаток на карте: ${remainingBalance}, снято ${balance}`);
        // } else {
        //     console.log('недостаточно средств');
        //     alert('недостаточно средствd');
        // }
    } else {
        console.log('Попробуйте еще раз');
        alert('Попробуйте еще раз');
    }
} else {
    console.log('Пользователь не найден');
    alert('Пользователь не найден');
}
