module.exports = {
    client: {
        includes: ["./pages/*.tsx"],
        service: {
            name: "spacex",
            url: "https://api.spacex.land/graphql",
        },
    },
};