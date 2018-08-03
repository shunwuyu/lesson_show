import axios from 'axios';
import { get } from './tools';
import * as config from './config';
export const admin = () => get({url: config.MOCK_AUTH_ADMIN});
