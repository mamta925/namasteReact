/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {

    let positiveFeedbackHash = {};
    let negativeFeedbackHash = {};
    let studentIdReportPoints = {};
    for(let i = 0; i< positive_feedback.length;i++){
           positiveFeedbackHash[positive_feedback[i]] = positive_feedback[i]
    }
    for(let i = 0; i< negative_feedback.length;i++){
           negativeFeedbackHash[negative_feedback[i]] = negative_feedback[i]
    }
  
     for(let i = 0; i< student_id.length;i++){
           let reportData = report[i].split(" ")
          for(let value of reportData){
       
              if(positiveFeedbackHash[value]){
                   studentIdReportPoints[student_id[i]] = (studentIdReportPoints[student_id[i]] || 0) +3
                        
              } else if(negativeFeedbackHash[value]){
                  studentIdReportPoints[student_id[i]] = (studentIdReportPoints[student_id[i]] || 0) -1
                           
              } else {
                studentIdReportPoints[student_id[i]] =  (studentIdReportPoints[student_id[i]] || 0)
              }
               
          }
    }
    let sortedStudentIdReportPoints =  Object.entries(studentIdReportPoints).sort((a, b) => b[1] - a[1]);
    let result = [];
   for(let i =0; i< k; i++){
        sortedStudentIdReportPoints.length && result.push(sortedStudentIdReportPoints[i][0])
   }

   return result ;
};

// topStudents(["z","x"],
// ["n","dk"],
// ["y","fom","no","nk"],
// [1,4,3,2],
// 1)
console.log(topStudents(["b","a","b","ba","ab"],
["aa","bb","bb","aa"],
["a","bbab","aabb","b","aa"],
[4,3,2,5,1],
5))