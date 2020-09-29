import Course from './Course';
import React, {useState, useEffect } from 'react';
import {ScrollView, View, StyleSheet } from 'react-native';
import TermSelector from './TermSelector';

  const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
  const terms = Object.values(termMap);
  
  const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
	
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  return (
    <ScrollView>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      { termCourses.map(course => <Course key={course.id} course={course} />) }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default CourseList;