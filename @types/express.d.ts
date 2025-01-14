/**
 *  declaration merging
 */

declare namespace Express {
    export interface Request {
        // add custom properties to the Request object
        locale: 'en' | 'fr' | 'he';
    }    
}
