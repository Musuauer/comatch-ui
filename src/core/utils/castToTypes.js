export function castStringToBoolean(string) {
    // if string is not 'true' or 'false', leave it as is
    switch (string) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return string;
    }
}
