export const funEmojis = [
    "😀", "😂", "😍", "🤩", "😎", // Faces
  "🎉", "🎂", "🍕", "🍹", "🍩", // Party & Food
  "🐶", "🐱", "🦊", "🐼", "🦄", // Animals
  "🌟", "☀️", "🌈", "❄️", "🌊", // Nature
  "💖", "💌", "💘", "💞", "💕", // Love
  "🚗", "✈️", "🚀", "🚲", "🛶", // Travel
  "📱", "💻", "🖥️", "🎮", "🤖", // Tech
  "⚽", "🏀", "🎾", "🏋️", "🏊", // Sports
  "🎃", "👻", "🧛‍♂️", "🦇", "☠️", // Spooky
  "😜", "🤓", "🥳", "🤯", "🤡", // Silly
  "🕶️", "📚", "🎨", "🎵", "🎤"  // Miscellaneous

];

export const getRandomEmoji = () => {
    return funEmojis[Math.floor(Math.random() * funEmojis.length)];
}