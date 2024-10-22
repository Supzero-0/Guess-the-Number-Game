# Guess the Number Game

This is a simple number guessing game built using **HTML**, **CSS**, and **JavaScript**. The user is prompted to choose a difficulty level, and based on the difficulty, the game generates a random number that the player needs to guess. The game provides feedback such as "it's more" or "it's less" for each guess, and once the correct number is guessed, a special message is displayed.

## Features

- Three difficulty levels:
  - **Easy**: Guess a number between 1 and 20 with 8 attempts.
  - **Medium**: Guess a number between 1 and 50 with 5 attempts.
  - **Hard**: Guess a number between 1 and 100 with 3 attempts.
- User input is handled via a form field where the player can enter their guesses.
- Feedback is given in real time to guide the player:
  - "It's more" if the guess is too low.
  - "It's less" if the guess is too high.
  - "You guessed the correct number!" when the player wins.
- All player attempts are displayed as a list on the page.
- The win message is styled to be more prominent when the correct number is guessed.

## Technologies Used

- **HTML**: For the structure of the page and form.
- **CSS**: For basic styling and making the win message more visible.
- **JavaScript**: For game logic, user input handling, and dynamic updates to the page.

## How to Play

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your favorite web browser.
3. The game will prompt you to choose a difficulty level:
   - Type `easy`, `medium`, or `hard` when prompted.
4. Once the difficulty is chosen, the game will generate a random number within a specified range.
5. Enter your guesses in the provided input field and click "Submit Guess".
6. You will receive feedback after each guess, and all your previous guesses will be displayed on the page.
7. If you guess the correct number, the game will display a "You guessed the correct number!" message in a larger, more visible format.

## Example Output

- After choosing a difficulty, you might see the following feedback while playing:
  - `It's more!` if your guess is lower than the correct number.
  - `It's less!` if your guess is higher than the correct number.
  - `You guessed the correct number!` once you've guessed it right.

## Code Structure

### HTML

- Contains a simple form where the user can input their guess.
- A `<p>` element is used to display feedback to the player.
- A `<ul>` element displays a list of all the user's attempts.

### JavaScript

- Handles the core game logic:
  - Generating a random number based on the selected difficulty.
  - Comparing the user's guess to the generated number.
  - Providing feedback and updating the DOM in real time.
  - Tracking the number of attempts and displaying them on the page.

### CSS

- The `win` class is applied to the feedback `<p>` when the user guesses correctly, increasing its size and changing the color for better visibility.

## How to Run

To run the game:

1. Open the `index.html` file in a browser.
2. Follow the prompts and enjoy the game!

## Possible Improvements

- **Additional difficulties**: Add more difficulty levels with different ranges and attempts.
- **Styling enhancements**: Improve the visual design and responsiveness of the game.
- **Animations**: Add animations or effects when the player wins or loses.
