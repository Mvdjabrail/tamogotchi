const tamogotchi = {
    name: 'Emin',
    meal: 1,
    energy: 4,
    mood: 0,
    getStatus() {
        if (this.meal === 0) {
            return `${this.name} Умер:(`
        }
        if (this.energy === 0) {
            return `${this.name} Умер:(`
        }
        else if(this.mood === 0) {
            return `${this.name} Умер:(`
        }
            let mealStatus = ''
        let energyStatus = ''
        let moodStatus = ''
        if (this.meal < 3) {
            mealStatus = 'Я голоден'
        } else {
            mealStatus = 'Я не голоден'
        };
        if (this.energy < 3) {
            energyStatus = 'Я хочу спать'
        } else {
            energyStatus = 'Я не хочу спать'
        };
        if (this.mood < 3) {
            moodStatus = 'Мне сукчно'
        } else {
            moodStatus = 'Мне весело'
        };
        return `Имя: ${this.name}, Еда: ${mealStatus} (${this.meal}), Энергия: ${energyStatus} (${this.energy}), Настроение: ${moodStatus} (${this.mood})`
    },
    setName(nam) {
        this.name = nam
    },
    mealName() {
        if (this.meal < 5) {
            this.meal++
            this.mood--
        }
        else if (
            this.meal === 5 && this.mood !== 0
        ) { }
    },
    sleepName() {
        if (this.energy < 5) {
            this.energy++
            this.meal--
        }
        else if (
            this.energy === 5 && this.meal !== 0
        ) { }
    },
    playName() {
        if (this.mood < 5) {
            this.mood++
            this.energy--
        }
        else if (
            this.mood === 5 && this.energy !== 0
        ) { }
    },

}
tamogotchi.playName()
tamogotchi.mealName()
tamogotchi.sleepName()
console.log(tamogotchi.getStatus())
