import { combineReducers } from 'redux';
import ListReducers from './ListReducers';
import AuthReducers from './AuthReducers';
import LessonReducers from './LessonReducers';
import CourseReducers from './CourseReducers';

export default combineReducers({
    listResponse: ListReducers,
    authResponse: AuthReducers,
    courseResponse: CourseReducers,
    lessonResponse: LessonReducers,
});
