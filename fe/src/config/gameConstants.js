export const NUMBER_OF_CARDS_IN_DECK = 42;

export const BREAKPOINTS = {
    xs: "max-width: 575.98px",
    sm: "max-width: 767.98px",
    md: "max-width: 991.98px",
    lg: "max-width: 1199.98px",
    xl: "min-width: 1200px",
};

export const COUNTRIES = {
    Afghanistan: { name: "Afghanistan", value: "afghanistan" },
    Alaska: { name: "Alaska", value: "alaska" },
    Alberta: { name: "Alberta", value: "alberta" },
    Argentina: { name: "Argentina", value: "argentina" },
    Brazil: { name: "Brazil", value: "brazil" },
    Central_America: { name: "Central America", value: "central_america" },
    China: { name: "China", value: "china" },
    Congo: { name: "Congo", value: "congo" },
    East_Africa: { name: "East Africa", value: "east_africa" },
    Eastern_Australia: {
        name: "Eastern Australia",
        value: "eastern_australia",
    },
    Eastern_United_States: {
        name: "Eastern United States",
        value: "eastern_united_states",
    },
    Egypt: { name: "Egypt", value: "egypt" },
    Great_Britain: { name: "Great Britain", value: "great_britain" },
    Greenland: { name: "Greenland", value: "greenland" },
    Iceland: { name: "Iceland", value: "iceland" },
    India: { name: "India", value: "india" },
    Indonesia: { name: "Indonesia", value: "indonesia" },
    Irkutsk: { name: "Irkutsk", value: "irkutsk" },
    Japan: { name: "Japan", value: "japan" },
    Kamchatka: { name: "Kamchatka", value: "kamchatka" },
    Madagascar: { name: "Madagascar", value: "madagascar" },
    Middle_East: { name: "Middle East", value: "middle_east" },
    Mongolia: { name: "Mongolia", value: "mongolia" },
    New_Guinea: { name: "New Guinea", value: "new_guinea" },
    North_Africa: { name: "North Africa", value: "north_africa" },
    Northern_Europe: { name: "Northern Europe", value: "northern_europe" },
    Northwest_Territory: {
        name: "Northwest Territory",
        value: "northwest_territory",
    },
    Ontario: { name: "Ontario", value: "ontario" },
    Peru: { name: "Peru", value: "peru" },
    Scandinavia: { name: "Scandinavia", value: "scandinavia" },
    Siam: { name: "Siam", value: "siam" },
    Siberia: { name: "Siberia", value: "siberia" },
    South_Africa: { name: "South Africa", value: "south_africa" },
    Southeast_Asia: { name: "Southeast Asia", value: "southeast_asia" },
    Southern_Europe: { name: "Southern Europe", value: "southern_europe" },
    Ural: { name: "Ural", value: "ural" },
    Ukraine: { name: "Ukrine", value: "ukraine" },
    Venezuela: { name: "Venezuela", value: "venezuela" },
    Western_Australia: {
        name: "Western Australia",
        value: "western_australia",
    },
    Western_Europe: { name: "Western Europe", value: "western_europe" },
    Western_United_States: {
        name: "Western United States",
        value: "western_united_states",
    },
    Quebec: { name: "Quebec", value: "quebec" },
    Yakursk: { name: "Yakursk", value: "yakursk" },
};

export const TROOP_TYPES = {
    Infantry: { name: "INFANTRY", troopSize: 1 },
    Cavalry: { name: "CAVALRY", troopSize: 5 },
    Artillery: { name: "ARTILLERY", troopSize: 10 },
};

export const CARDS = [
    { country: COUNTRIES.Afghanistan.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Alaska.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Alberta.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Argentina.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Brazil.name, troop: TROOP_TYPES.Artillery.name },
    {
        country: COUNTRIES.Central_America.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    { country: COUNTRIES.China.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Congo.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.East_Africa.name, troop: TROOP_TYPES.Infantry.name },
    {
        country: COUNTRIES.Eastern_Australia.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    {
        country: COUNTRIES.Eastern_United_States.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    { country: COUNTRIES.Egypt.name, troop: TROOP_TYPES.Infantry.name },
    {
        country: COUNTRIES.Great_Britain.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    { country: COUNTRIES.Greenland.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Iceland.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.India.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Indonesia.name, troop: TROOP_TYPES.Artillery.name },
    { country: COUNTRIES.Irkutsk.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Japan.name, troop: TROOP_TYPES.Artillery.name },
    { country: COUNTRIES.Kamchatka.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Madagascar.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Middle_East.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Mongolia.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.New_Guinea.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.North_Africa.name, troop: TROOP_TYPES.Cavalry.name },
    {
        country: COUNTRIES.Northern_Europe.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    {
        country: COUNTRIES.Northwest_Territory.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    { country: COUNTRIES.Ontario.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Peru.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Quebec.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Scandinavia.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Siam.name, troop: TROOP_TYPES.Infantry.name },
    { country: COUNTRIES.Siberia.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.South_Africa.name, troop: TROOP_TYPES.Artillery.name },
    {
        country: COUNTRIES.Southern_Europe.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    { country: COUNTRIES.Ural.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Ukraine.name, troop: TROOP_TYPES.Cavalry.name },
    { country: COUNTRIES.Venezuela.name, troop: TROOP_TYPES.Infantry.name },
    {
        country: COUNTRIES.Western_Australia.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    {
        country: COUNTRIES.Western_Europe.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    {
        country: COUNTRIES.Western_United_States.name,
        troop: TROOP_TYPES.Artillery.name,
    },
    { country: COUNTRIES.Yakursk.name, troop: TROOP_TYPES.Cavalry.name },
];

export const PLAYERS = [
    {
        name: "Napoleon",
        country: "France",
        color: "#030f63",
        army: 10,
        reserve: 10,
        areas: [],
        bonus: 2,
        alive: true,
    },
    {
        name: "Elizabeth I",
        country: "England",
        color: "#d6040e",
        army: 20,
        reserve: 20,
        areas: [],
        bonus: 2,
        alive: true,
    },
    {
        name: "Washington",
        country: "USA",
        color: "#d86b04",
        army: 20,
        reserve: 20,
        areas: [],
        bonus: 2,
        alive: true,
    },
];

export const NEIGHBOURS = {
    afghanistan: {
        countries: ["ukraine", "ural", "middle_east", "china", "india"],
    },
    alaska: { countries: ["kamchatka", "alberta", "northwest_territory"] },
    alberta: {
        countries: [
            "alaska",
            "western_united_states",
            "ontario",
            "northwest_territory",
        ],
    },
    argentina: { countries: ["brazil", "peru"] },
    brazil: { countries: ["peru", "argentina", "north_africa", "venezuela"] },
    central_america: {
        countries: [
            "venezuela",
            "eastern_united_states",
            "western_united_states",
        ],
    },
    china: {
        countries: [
            "ural",
            "siberia",
            "afghanistan",
            "mongolia",
            "siam",
            "india",
        ],
    },
    congo: { countries: ["south_africa", "north_africa", "east_africa"] },
    east_africa: {
        countries: [
            "middle_east",
            "egypt",
            "north_africa",
            "congo",
            "madagascar",
            "south_africa",
        ],
    },
    eastern_australia: { ccountries: ["western_australia", "new_guinea"] },
    eastern_united_states: {
        countries: [
            "central_america",
            "quebec",
            "ontario",
            "western_united_states",
        ],
    },
    egypt: {
        countries: [
            "middle_east",
            "southern_europe",
            "north_africa",
            "east_africa",
        ],
    },
    great_britain: {
        countries: [
            "western_europe",
            "iceland",
            "northern_europe",
            "scandinavia",
        ],
    },
    greenland: {
        countries: ["iceland", "quebec", "ontario", "northwest_territory"],
    },
    iceland: { countries: ["greenland", "great_britain", "scandinavia"] },
    india: { countries: ["middle_east", "siam", "afghanistan", "china"] },
    indonesia: { countries: ["siam", "western_australia", "new_guinea"] },
    irkutsk: { countries: ["yakursk", "siberia", "kamchatka", "mongolia"] },
    japan: { countries: ["kamchatka", "mongolia"] },
    kamchatka: {
        countries: ["alaska", "yakursk", "japan", "irkutsk", "mongolia"],
    },
    madagascar: { countries: ["south_africa", "east_africa"] },
    middle_east: {
        countries: [
            "ukraine",
            "afghanistan",
            "india",
            "egypt",
            "east_africa",
            "southern_europe",
        ],
    },
    mongolia: {
        countries: ["irkutsk", "siberia", "kamchatka", "china", "japan"],
    },
    new_guinea: {
        countries: ["indonesia", "eastern_australia", "western_australia"],
    },
    north_africa: {
        countries: [
            "egypt",
            "southern_europe",
            "western_europe",
            "east_africa",
            "congo",
            "brazil",
        ],
    },
    northern_europe: {
        countries: [
            "ukraine",
            "great_britain",
            "scandinavia",
            "southern_europe",
            "western_europe",
        ],
    },
    northwest_territory: {
        countries: ["greenland", "alaska", "alberta", "ontario"],
    },
    ontario: {
        countries: [
            "greenland",
            "quebec",
            "alberta",
            "western_united_states",
            "eastern_united_states",
            "northwest_territory",
        ],
    },
    peru: { countries: ["brazil", "argentina", "venezuela"] },
    quebec: { countries: ["greenland", "eastern_united_states", "ontario"] },
    scandinavia: {
        countries: ["iceland", "great_britain", "ukraine", "northern_europe"],
    },
    siam: { countries: ["indonesia", "india", "china"] },
    sibera: { countries: ["ural", "mongolia", "yakursk", "irkutsk", "china"] },
    south_africa: { countries: ["congo", "madagascar", "east_africa"] },
    southern_europe: {
        countries: [
            "north_africa",
            "egypt",
            "northern_europe",
            "western_europe",
            "middle_east",
            "ukraine",
        ],
    },
    ural: { countries: ["ukraine", "siberia", "afghanistan", "china"] },
    ukraine: {
        countries: [
            "scandinavia",
            "ural",
            "northern_europe",
            "southern_europe",
            "afghanistan",
            "middle_east",
        ],
    },
    venezuela: { countries: ["brazil", "peru", "central_america"] },
    western_australia: {
        countries: ["eastern_australia", "new_guinea", "indonesia"],
    },
    western_europe: {
        countries: [
            "north_africa",
            "great_britain",
            "northern_europe",
            "southern_europe",
        ],
    },
    western_united_states: {
        countries: [
            "eastern_united_states",
            "central_america",
            "ontario",
            "alberta",
        ],
    },
    yakursk: { countries: ["irkutsk", "siberia", "kamchatka"] },
};

export const CONTINENTS = [
    "ASIA",
    "AFRICA",
    "AUSTRALIA",
    "NORTH_AMERICA",
    "SOUTH_AMERICA",
    "EUROPE",
];
