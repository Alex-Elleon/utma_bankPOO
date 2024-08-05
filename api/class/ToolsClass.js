class ToolsCards {
    constructor (
        createdMonth, 
        createdYear
    ){
        this.createdMonth = createdMonth;
        this.createdYear = createdYear;
    }

    //Calculate the account numbers
    async createNumberAccount(){
        try {
            function createDigitNumberAccount() {
                const digitAccount = Math.floor(Math.random() * 1e21).toString();
                return digitAccount.padStart(21, '1234567890'); // Make sure it is 21 digits long.
            }
            
            const digitAccount = createDigitNumberAccount();
            console.log('21 random digits:', digitAccount);

            const digitsSet = '444'; 
            const numberAccountComplete = digitsSet + digitAccount;
            console.log('Account number complete:', numberAccountComplete);

        }
        
         catch (error) {
            throw new Error(`Error al crear el numero de cuenta: ${error}`);
        }

        /*function generateRandomAccountNumber() {
                let resultAccount = '';
                for (let i = 0; i < 24; i++) {
                    const randomDigitAccount = Math.floor(Math.random() * 10); // Genera un dígito entre 0 y 9
                    resultAccount += randomDigitAccount;
                }
                return resultAccount;
            }
            
            const randomDigitNumber = generateRandomAccountNumber();
            return randomDigitNumber;
            */
    }


    //Calculate card numbers
    async createNumberCard(){
        try {
            /*function generateRandomNumberCard() {
                let resultCard = '';
                for (let i = 0; i < 16; i++) {
                    const randomDigitCard = Math.floor(Math.random() * 10); // Genera un dígito entre 0 y 9
                    resultCard += randomDigitCard;
                }
                return resultCard;
            }
            
            const randomDigitNumber = generateRandomNumberCard();
            return randomDigitNumber;
           */

            function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
              }
              
              // Set the first 3 digits
              const firstThreeDigits = "666";
              
              // Generate the 13 random digits
              let randomNumbers = firstThreeDigits;
              for (let i = 0; i < 13; i++) {
                const randomDigit = generateRandomNumber(0, 9);
                randomNumbers += randomDigit;
              }
              
              // The complete card number
              const cardNumber = randomNumbers;
              return cardNumber;

            }
         catch (error) {
            throw new Error(`Error al crear el numero de tarjeta: ${error}`);
        }
    }

    //Calculate the cvv numbers of the cards

    async createCvvNumber(){
        try {
            function generateRandomNumberCvv() {
                let resultCvv = '';
                for (let i = 0; i < 3; i++) {
                    const randomDigitCvv = Math.floor(Math.random() * 10); // Genera un dígito entre 0 y 9
                    resultCvv += randomDigitCvv;
                }
                return resultCvv;
            }
            
            const randomDigitNumber = generateRandomNumberCvv();
            return randomDigitNumber;
        } catch (error) {
            throw new Error(`Error al crear el numero cvv de la cuenta: ${error}`);
        }
    }

    //In addition to the creation of the expiration date for the card.

    async createExpirationDateCard(){
        try {
            function generateExpirationDateCard(createdMonth, createdYear) {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth() + 1;
            
                // Calculate the future year (3 years from the created year)
                const futureYear = createdYear + 3;
            
                // If the future year is the current year, ensure the month is greater than or equal to the current month
                const month = (futureYear === currentYear) ? Math.max(createdMonth, currentMonth) : createdMonth;
            
                // Format the result as MM/YY
                const formattedMonth = (month < 10) ? `0${month}` : month;
                const formattedYear = futureYear.toString().slice(-2); // Get the last two digits of the year
            
                return `${formattedMonth}/${formattedYear}`;
            }
            
            /* Example usage: Assuming the card was created in March 2022
            const expirationDate = generateExpirationDateCard(3, 2022);
            console.log(expirationDate); // Output: "03/25"*/
            
            
        } catch (error) {
            throw new Error(`Error al crear la fecha de expiracion de la tarjeta: ${error}`);
        }
    }
}