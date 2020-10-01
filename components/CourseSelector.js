import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course';
import Course from './Course';
import React, {useState } from 'react';
import {View, StyleSheet} from 'react-native';


const CourseSelector = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggle = course => setSelected(selected => (
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
  ));

  return (
    <View style={styles.courseList}>
      {
        courses.map(course => (
          <Course key={course.id} course={course}
            isDisabled={hasConflict(course, selected)}
            isSelected={selected.includes(course)}
            select={toggle}
          />
        ))
      }
    </View>
  );
  };
  const styles = StyleSheet.create ({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CourseSelector;
