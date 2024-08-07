const { Worker } = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');
const {Submission} = require('../models/submissionModel');

function evaluationWorker(queue) {
  new Worker('EvaluationQueue', async job => {
    if (job.name === 'EvaluationJob') {

      try {
        const response = await axios.post('http://localhost:3001/sendPayload', {
          userId: job.data.userId,
          payload: job.data
        })
        console.log(response);
        console.log(job.data);

        /* //get the evalaution status
        const status = job.data.response.status;
        // Update the status in the submission collection
        await Submission.updateOne(
          { userId: job.data.userId, problemId: job.data.problemId },
          { status: status }
        ); */

      } catch (error) {
        console.log(error)
      }
    }
  }, {
    connection: redisConnection
  });
}

module.exports = evaluationWorker;