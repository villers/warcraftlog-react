import _ from 'lodash';

class WarcraftService {
    constructor() {
        this.apiUrl = 'https://www.warcraftlogs.com:443/v1/';
        this.apiKey = '19953fab295d93d4854fa405147b66b6';
    }

    getCharacterParse(characterName, serverName, serverRegion) {
        console.log(_);
        return fetch(this.generateUrl(`parses/character/${characterName}/${serverName}/${serverRegion}`))
            .then((response) => response.json())
            .then((response) => {
                return _.chain(response)
                    .orderBy('name')
                    .orderBy((i) => i.specs.filter((i) => !i.combined)[0].data[0].start_time)
                    .value();
            })
            .catch(() => {
                return [];
            });
    }

    generateUrl(path) {
        return `${this.apiUrl}${path}?api_key=${this.apiKey}`;
    }
}

export default WarcraftService;