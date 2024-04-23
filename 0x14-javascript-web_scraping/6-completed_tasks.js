#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const tasks = JSON.parse(body);
    const userTasks = {};

    tasks.forEach(function (task) {
      if (task.completed) {
        if (!userTasks[task.userId]) {
          userTasks[task.userId] = 0;
        }
        userTasks[task.userId]++;
      }
    });

    for (const userId in userTasks) {
      console.log(`User ID: ${userId} Completed Tasks: ${userTasks[userId]}`);
    }
  }
});
