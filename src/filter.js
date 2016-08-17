/**
 * Created by ralap on 16-8-16.
 */
export function fromNow (time) {
    let date = new Date(time*1000);
    return date.toLocaleString();
}