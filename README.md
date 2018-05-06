# Try-TypeScript


Створити класс “Fighter”. Клас повиненин приймати значення name, power і health. Також клас повинен мати методи “setDamage” та “hit”.

Метод “setDamage” приймає значення “damage” і наносить урон змінюючи значення health (health = health - damage), і виводить на екран строку “ health: ”.

Метод “hit” приймає значення “enemy”, “point”, і в середині викликає метод переданого обекту “enemy.setDamage(damage)”. “damage” вираховується наступним чином - damage = point * power, де point - змінний параметр, прийнятий в функцію "fight", power - це властивість об'єкту який наносить урон.

Створити клас ImprovedFighter, який буде наслідуватися від класу Fighter, з його властивостями і методами.

Для цього класу створити метод doubleHit, який буде викликати наслідуваний метод “hit”, і передавати туди подвоєне значення “point”.

Від обох класів породити по екземпляру відповідно fighter, improvedFighter.

Створити клас Fight та метод fight, яка прийматиме параметри - fighter, improvedFighter, і point. fight може приймати довільну кількість параметрів. Наприклад, fight(fighter, improvedFighter, 25, 13, 45), де point = [25, 13, 45]. Можете задавати дані за допомогою текстового поля.

Ця функція запускатиме процес гри: гравці по черзі наносять удар один одному за допомогою методу hit, що приймає відповідне значення point. Якщо один із них помирає (health = 0), то гра закінчується і результат виводиться на екран.

При виконанні домашнього завдання можете використати готові налаштування для проекту, але розширте їх. Можна добавити валідацію на використання локальних зміних та параметрів (в tsconfig.json). Також при виконані завдання використайте модифікатори доступу, інтерфейси, приведення типів. Компіляція повинна проходити без помилок.

---

1. npm i
2. webpack   
3. webpack-dev-server
4. Go to localhost:4040/
