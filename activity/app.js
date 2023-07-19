function findMaxBenefit(startTimes, endTimes) {
    // Объединяем времена начала и окончания в один массив
    let times = [];
    for (let i = 0; i < startTimes.length; i++) {
      times.push({ time: startTimes[i], isStart: true });
      times.push({ time: endTimes[i], isStart: false });
    }
  
    // Сортируем времена по возрастанию
    times.sort(function(a, b) {
      return a.time - b.time;
    });
  
    let maxBenefit = 0;
    let currentBenefit = 0;
  
    // Проходимся по временам и считаем выгоду
    for (let i = 0; i < times.length; i++) {
      if (times[i].isStart) {
        currentBenefit += getBenefit(times[i].time);
        maxBenefit = Math.max(maxBenefit, currentBenefit);
      } else {
        currentBenefit -= getBenefit(times[i].time);
      }
    }
  
    return maxBenefit;
  }
  
  function getBenefit(time) {
    // Вычисляем выгоду в зависимости от времени
    if (time >= 9 && time < 13) {
      return 1;
    } else if (time >= 13 && time < 17) {
      return 2;
    } else {
      return 0;
    }
  }
  
  // Пример использования
  let startTimes = [11, 12];
  let endTimes = [14, 16];
  let maxBenefit = findMaxBenefit(startTimes, endTimes);
  console.log(maxBenefit); // 7