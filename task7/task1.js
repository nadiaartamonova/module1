'use strict';

{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    function filter(allStudents, failedStudents) {
        
        let cAll = [...allStudents];
        for(const student of allStudents) {
            for(const fail of failedStudents) {
                if(student === fail) {
                    cAll.splice(cAll.indexOf(fail), 1);
                }
            }
        }
        return cAll;
    }

    console.log(filter(allStudents, failedStudents));

}


