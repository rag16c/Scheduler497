import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';

const termMap = { F: "Fall", S: "Spring", W: "Winter"};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);


const CourseList = ({courses,view}) => {
    const [selectedTerm, setSelectedTerm] = useState("Fall");
    
    const termCourse = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
    <ScrollView>
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        <CourseSelector courses={termCourse} view={view}/>
    </ScrollView>
  );
};

export default CourseList;