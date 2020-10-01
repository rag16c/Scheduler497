import Course from './Course';
import React, {useState, useEffect } from 'react';
import {ScrollView, View, StyleSheet } from 'react-native';
import TermSelector from './TermSelector';
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course';
import CourseSelector from './CourseSelector';

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  return (
    <ScrollView>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} />
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