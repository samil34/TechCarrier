import { combineReducers } from 'redux';
import ListReducers from './ListReducers';
import AuthReducers from './AuthReducers';
import LessonReducers from './LessonReducers';
import CourseReducers from './CourseReducers';
import ProfileReducers from './ProfileReducers';


export default combineReducers({
    listResponse: ListReducers,
    authResponse: AuthReducers,
    courseResponse: CourseReducers,
    lessonResponse: LessonReducers,
    profileResponse: ProfileReducers,
});
