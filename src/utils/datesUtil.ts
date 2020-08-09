import { format } from 'timeago.js';

class DatesUtil {
    static getTimeAgo( date: Date ): string {
        return format( date, 'en_us');
    }
};

export default DatesUtil;