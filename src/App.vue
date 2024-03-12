<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" />
    </div>
    <div class="title">
      <h1>Welcome to Your Vue App!</h1>
      <p>You did it! Keep going.</p>
    </div>
  </header>

  <main>
    <div class="welcome-section">
      <h2>Get Started</h2>
      <p>Start building something amazing with Vue!</p>
    </div>
  </main>
</template>

<style scoped>
header {
  background: linear-gradient(to right, #2e3192, #1bffff);
  color: #fff;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Arial', sans-serif;
}

.logo img {
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease-in-out;
}

.logo img:hover {
  transform: scale(1.1);
}

.title {
  text-align: center;
}

.title h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.title p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

main {
  padding: 2rem;
  text-align: center;
  background-image: url('./assets/background-pattern.png');
}

.welcome-section {
  background: linear-gradient(to bottom right, #f5f5f5, #d6d6d6);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.welcome-section:hover {
  transform: translateY(-5px);
}

.welcome-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.5rem;
}
</style>
