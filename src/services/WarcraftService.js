import _ from 'lodash';

class WarcraftService {
    constructor() {
        this.apiUrl = 'https://www.warcraftlogs.com:443/v1/';
        this.apiKey = '19953fab295d93d4854fa405147b66b6';
    }

    getCharacterParse(characterName, serverName, serverRegion, zone) {
        return fetch(this.generateUrl(`parses/character/${characterName}/${serverName}/${serverRegion}`, zone))
            .then((response) => response.json())
            .then((response) => {
                return _.chain(response)
                    .forEach((item) => item.specs = _.filter(item.specs, (row) => row.spec !== 'Ranged'))
                    .orderBy('name')
                    .orderBy((i) => i.specs.filter((i) => !i.combined)[0].data[0].start_time)
                    .value();
            })
            .catch(() => {
                return [];
            });
    }

    generateUrl(path, zone) {
        return `${this.apiUrl}${path}?api_key=${this.apiKey}&zone=${zone}`;
    }
}

export default WarcraftService;