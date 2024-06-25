function parseBearerToken(rawToken: string): string {
    const tokenSchema = rawToken.split(' ');

    if (tokenSchema[0] !== 'Bearer' || ! tokenSchema[1]) {
        throw new Error('Invalid token schema');
    }

    return tokenSchema[1];
}

export default parseBearerToken;