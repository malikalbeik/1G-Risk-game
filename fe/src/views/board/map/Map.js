import React, { Component } from "react";
import styled from "styled-components";
import Continent from "./Continent";

class Map extends Component {
    render() {
        return (
            <MapContainer>
                <svg
                    width="719"
                    height="477"
                    viewBox="0 0 719 477"
                    style={{ backgroundColor: "#88b6da" }}
                >
                    <Continent continent="AUSTRALIA" {...this.props} />
                    <Continent continent="ASIA" {...this.props} />
                    <Continent continent="AFRICA" {...this.props} />
                    <Continent continent="NORTH_AMERICA" {...this.props} />
                    <Continent continent="SOUTH_AMERICA" {...this.props} />
                    <Continent continent="EUROPE" {...this.props} />
                </svg>
            </MapContainer>
        );
    }
}

const MapContainer = styled.div`
    text-align: center;

    #eastern_australia {
        fill: #a31aa6;
    }
    #western_australia {
        fill: #a31aa6;
    }
    #indonesia {
        fill: #a31aa6;
    }
    #new_guinea {
        fill: #a31aa6;
    }
    #north_africa {
        fill: #9c7805;
    }
    #south_africa {
        fill: #9c7805;
    }
    #congo {
        fill: #9c7805;
    }
    #north_africa {
        fill: #9c7805;
    }
    #east_africa {
        fill: #9c7805;
    }
    #egypt {
        fill: #9c7805;
    }
    #madagascar {
        fill: #9c7805;
    }
    #peru {
        fill: #ea4224;
    }
    #argentina {
        fill: #ea4224;
    }
    #brazil {
        fill: #ea4224;
    }
    #venezuela {
        fill: #ea4224;
    }
    #central_america {
        fill: #d9dd23;
    }
    #eastern_united_states {
        fill: #d9dd23;
    }
    #western_united_states {
        fill: #d9dd23;
    }
    #northwest_territory {
        fill: #d9dd23;
    }
    #ontario {
        fill: #d9dd23;
    }
    #alberta {
        fill: #d9dd23;
    }
    #alaska {
        fill: #d9dd23;
    }
    #quebec {
        fill: #d9dd23;
    }
    #greenland {
        fill: #d9dd23;
    }
    #southern_europe {
        fill: #47c1dc;
    }
    #western_europe {
        fill: #47c1dc;
    }
    #northern_europe {
        fill: #47c1dc;
    }
    #great_britain {
        fill: #47c1dc;
    }
    #iceland {
        fill: #47c1dc;
    }
    #scandinavia {
        fill: #47c1dc;
    }
    #ukraine {
        fill: #47c1dc;
    }
    #middle_east {
        fill: #89db8c;
    }
    #afghanistan {
        fill: #89db8c;
    }
    #india {
        fill: #89db8c;
    }
    #china {
        fill: #89db8c;
    }
    #siam {
        fill: #89db8c;
    }
    #irkutsk {
        fill: #89db8c;
    }
    #mongolia {
        fill: #89db8c;
    }
    #ural {
        fill: #89db8c;
    }
    #siberia {
        fill: #89db8c;
    }
    #yakursk {
        fill: #89db8c;
    }
    #japan {
        fill: #89db8c;
    }
    #kamchatka {
        fill: #89db8c;
    }
`;

export default Map;

/* Paths lets add these later if we have time*/

/*
<svg
    width="714"
    height="385"
    viewBox="0 0 714 385"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="connection_arrows"
>
    <g>
        
    </g>
    <g>
        <path
            d="M308.504 75.4449L321.504 56.4449"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M323.004 56.4449C323.004 56.8428 322.845 57.2243 322.564 57.5056C322.283 57.7869 321.901 57.9449 321.504 57.9449C321.106 57.9449 320.724 57.7869 320.443 57.5056C320.162 57.2243 320.004 56.8428 320.004 56.4449C320.004 56.0471 320.162 55.6656 320.443 55.3843C320.724 55.103 321.106 54.9449 321.504 54.9449C321.901 54.9449 322.283 55.103 322.564 55.3843C322.845 55.6656 323.004 56.0471 323.004 56.4449Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M321.504 56.4449L344.754 69.9449"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M346.254 69.9449C346.254 70.3428 346.095 70.7243 345.814 71.0056C345.533 71.2869 345.151 71.4449 344.754 71.4449C344.356 71.4449 343.974 71.2869 343.693 71.0056C343.412 70.7243 343.254 70.3428 343.254 69.9449C343.254 69.5471 343.412 69.1656 343.693 68.8843C343.974 68.603 344.356 68.4449 344.754 68.4449C345.151 68.4449 345.533 68.603 345.814 68.8843C346.095 69.1656 346.254 69.5471 346.254 69.9449Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M344.754 69.9449L344.504 104.195"
            stroke="black"
            strokeWidth="1.2"
            strokeDasharray="4.8 1.2"
        />
    </g>
    <g>
        <path
            d="M346.004 104.195C346.004 104.593 345.845 104.974 345.564 105.256C345.283 105.537 344.901 105.695 344.504 105.695C344.106 105.695 343.724 105.537 343.443 105.256C343.162 104.974 343.004 104.593 343.004 104.195C343.004 103.797 343.162 103.416 343.443 103.134C343.724 102.853 344.106 102.695 344.504 102.695C344.901 102.695 345.283 102.853 345.564 103.134C345.845 103.416 346.004 103.797 346.004 104.195Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M344.504 104.195L308.254 75.4449"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M308.504 75.4449L344.754 70.1949"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M314.754 137.57C314.754 137.968 314.595 138.349 314.314 138.631C314.033 138.912 313.651 139.07 313.254 139.07C312.856 139.07 312.474 138.912 312.193 138.631C311.912 138.349 311.754 137.968 311.754 137.57C311.754 137.172 311.912 136.791 312.193 136.509C312.474 136.228 312.856 136.07 313.254 136.07C313.651 136.07 314.033 136.228 314.314 136.509C314.595 136.791 314.754 137.172 314.754 137.57Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M313.254 137.57L305.754 125.07"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M307.379 125.07C307.379 125.468 307.22 125.849 306.939 126.131C306.658 126.412 306.276 126.57 305.879 126.57C305.481 126.57 305.099 126.412 304.818 126.131C304.537 125.849 304.379 125.468 304.379 125.07C304.379 124.672 304.537 124.291 304.818 124.009C305.099 123.728 305.481 123.57 305.879 123.57C306.276 123.57 306.658 123.728 306.939 124.009C307.22 124.291 307.379 124.672 307.379 125.07V125.07Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M387.361 193.758C387.361 194.156 387.202 194.537 386.921 194.819C386.64 195.1 386.258 195.258 385.861 195.258C385.463 195.258 385.081 195.1 384.8 194.819C384.519 194.537 384.361 194.156 384.361 193.758C384.361 193.36 384.519 192.979 384.8 192.697C385.081 192.416 385.463 192.258 385.861 192.258C386.258 192.258 386.64 192.416 386.921 192.697C387.202 192.979 387.361 193.36 387.361 193.758Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M385.861 193.758L387.275 211.966"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M388.952 211.966C388.952 212.364 388.793 212.745 388.512 213.027C388.231 213.308 387.849 213.466 387.452 213.466C387.054 213.466 386.672 213.308 386.391 213.027C386.11 212.745 385.952 212.364 385.952 211.966C385.952 211.568 386.11 211.187 386.391 210.905C386.672 210.624 387.054 210.466 387.452 210.466C387.849 210.466 388.231 210.624 388.512 210.905C388.793 211.187 388.952 211.568 388.952 211.966V211.966Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M452.061 254.392C452.061 254.79 451.903 255.172 451.621 255.453C451.34 255.734 450.959 255.892 450.561 255.892C450.163 255.892 449.781 255.734 449.5 255.453C449.219 255.172 449.061 254.79 449.061 254.392C449.061 253.995 449.219 253.613 449.5 253.332C449.781 253.05 450.163 252.892 450.561 252.892C450.959 252.892 451.34 253.05 451.621 253.332C451.903 253.613 452.061 253.995 452.061 254.392Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M450.561 254.039L442.429 266.59"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M443.929 266.59C443.929 266.988 443.771 267.369 443.49 267.651C443.208 267.932 442.827 268.09 442.429 268.09C442.031 268.09 441.65 267.932 441.368 267.651C441.087 267.369 440.929 266.988 440.929 266.59C440.929 266.192 441.087 265.811 441.368 265.529C441.65 265.248 442.031 265.09 442.429 265.09C442.827 265.09 443.208 265.248 443.49 265.529C443.771 265.811 443.929 266.192 443.929 266.59Z"
            fill="black"
        />
    </g>
    <g>
        <path
            d="M616.817 254.216C616.817 254.613 616.659 254.995 616.377 255.276C616.096 255.558 615.715 255.716 615.317 255.716C614.919 255.716 614.537 255.558 614.256 255.276C613.975 254.995 613.817 254.613 613.817 254.216C613.817 253.818 613.975 253.436 614.256 253.155C614.537 252.874 614.919 252.716 615.317 252.716C615.715 252.716 616.096 252.874 616.377 253.155C616.659 253.436 616.817 253.818 616.817 254.216V254.216Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M615.493 254.216L622.918 279.141"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M624.418 279.141C624.418 279.539 624.26 279.921 623.979 280.202C623.697 280.483 623.316 280.641 622.918 280.641C622.52 280.641 622.139 280.483 621.857 280.202C621.576 279.921 621.418 279.539 621.418 279.141C621.418 278.743 621.576 278.362 621.857 278.081C622.139 277.799 622.52 277.641 622.918 277.641C623.316 277.641 623.697 277.799 623.979 278.081C624.26 278.362 624.418 278.743 624.418 279.141Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M622.918 279.495L641.656 283.561"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M300.033 252.978C300.033 253.376 299.875 253.758 299.593 254.039C299.312 254.32 298.931 254.478 298.533 254.478C298.135 254.478 297.753 254.32 297.472 254.039C297.191 253.758 297.033 253.376 297.033 252.978C297.033 252.58 297.191 252.199 297.472 251.918C297.753 251.636 298.135 251.478 298.533 251.478C298.931 251.478 299.312 251.636 299.593 251.918C299.875 252.199 300.033 252.58 300.033 252.978V252.978Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M298.533 252.978L272.723 260.403"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M274.223 260.403C274.223 260.801 274.065 261.182 273.784 261.464C273.503 261.745 273.121 261.903 272.723 261.903C272.326 261.903 271.944 261.745 271.663 261.464C271.381 261.182 271.223 260.801 271.223 260.403C271.223 260.005 271.381 259.623 271.663 259.342C271.944 259.061 272.326 258.903 272.723 258.903C273.121 258.903 273.503 259.061 273.784 259.342C274.065 259.623 274.223 260.005 274.223 260.403V260.403Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M224.753 2.19495C224.753 2.59277 224.595 2.9743 224.314 3.2556C224.033 3.5369 223.651 3.69495 223.253 3.69495C222.856 3.69495 222.474 3.5369 222.193 3.2556C221.912 2.9743 221.753 2.59277 221.753 2.19495C221.753 1.79712 221.912 1.4156 222.193 1.13429C222.474 0.852988 222.856 0.694946 223.253 0.694946C223.651 0.694946 224.033 0.852988 224.314 1.13429C224.595 1.4156 224.753 1.79712 224.753 2.19495Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M223.253 2.19495L207.753 39.6949"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M209.253 39.6949C209.253 40.0928 209.095 40.4743 208.814 40.7556C208.533 41.0369 208.151 41.1949 207.753 41.1949C207.356 41.1949 206.974 41.0369 206.693 40.7556C206.412 40.4743 206.253 40.0928 206.253 39.6949C206.253 39.2971 206.412 38.9156 206.693 38.6343C206.974 38.353 207.356 38.1949 207.753 38.1949C208.151 38.1949 208.533 38.353 208.814 38.6343C209.095 38.9156 209.253 39.2971 209.253 39.6949V39.6949Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M223.253 1.94495L155.253 52.1949"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M156.753 52.1949C156.753 52.5928 156.595 52.9743 156.314 53.2556C156.033 53.5369 155.651 53.6949 155.253 53.6949C154.856 53.6949 154.474 53.5369 154.193 53.2556C153.912 52.9743 153.753 52.5928 153.753 52.1949C153.753 51.7971 153.912 51.4156 154.193 51.1343C154.474 50.853 154.856 50.6949 155.253 50.6949C155.651 50.6949 156.033 50.853 156.314 51.1343C156.595 51.4156 156.753 51.7971 156.753 52.1949Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M223.253 1.94495L186.503 10.1949"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M188.003 10.1949C188.003 10.5928 187.845 10.9743 187.564 11.2556C187.283 11.5369 186.901 11.6949 186.503 11.6949C186.106 11.6949 185.724 11.5369 185.443 11.2556C185.162 10.9743 185.003 10.5928 185.003 10.1949C185.003 9.79712 185.162 9.4156 185.443 9.13429C185.724 8.85299 186.106 8.69495 186.503 8.69495C186.901 8.69495 187.283 8.85299 187.564 9.13429C187.845 9.4156 188.003 9.79712 188.003 10.1949Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M296.504 36.9449C296.504 37.3428 296.345 37.7243 296.064 38.0056C295.783 38.2869 295.401 38.4449 295.004 38.4449C294.606 38.4449 294.224 38.2869 293.943 38.0056C293.662 37.7243 293.504 37.3428 293.504 36.9449C293.504 36.5471 293.662 36.1656 293.943 35.8843C294.224 35.603 294.606 35.4449 295.004 35.4449C295.401 35.4449 295.783 35.603 296.064 35.8843C296.345 36.1656 296.504 36.5471 296.504 36.9449V36.9449Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M295.004 36.9449L274.504 19.1949"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M276.004 19.4449C276.004 19.8428 275.845 20.2243 275.564 20.5056C275.283 20.7869 274.901 20.9449 274.504 20.9449C274.106 20.9449 273.724 20.7869 273.443 20.5056C273.162 20.2243 273.004 19.8428 273.004 19.4449C273.004 19.0471 273.162 18.6656 273.443 18.3843C273.724 18.103 274.106 17.9449 274.504 17.9449C274.901 17.9449 275.283 18.103 275.564 18.3843C275.845 18.6656 276.004 19.0471 276.004 19.4449V19.4449Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M647.929 98.2986C647.929 98.6964 647.771 99.078 647.49 99.3593C647.209 99.6406 646.827 99.7986 646.429 99.7986C646.032 99.7986 645.65 99.6406 645.369 99.3593C645.087 99.078 644.929 98.6964 644.929 98.2986C644.929 97.9008 645.087 97.5193 645.369 97.2379C645.65 96.9566 646.032 96.7986 646.429 96.7986C646.827 96.7986 647.209 96.9566 647.49 97.2379C647.771 97.5193 647.929 97.9008 647.929 98.2986V98.2986Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M646.429 98.2986L669.057 117.037"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M670.557 117.037C670.557 117.435 670.399 117.816 670.117 118.098C669.836 118.379 669.455 118.537 669.057 118.537C668.659 118.537 668.277 118.379 667.996 118.098C667.715 117.816 667.557 117.435 667.557 117.037C667.557 116.639 667.715 116.258 667.996 115.976C668.277 115.695 668.659 115.537 669.057 115.537C669.455 115.537 669.836 115.695 670.117 115.976C670.399 116.258 670.557 116.639 670.557 117.037V117.037Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M669.057 117.037L636.883 122.34"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M638.383 122.34C638.383 122.738 638.225 123.12 637.944 123.401C637.663 123.682 637.281 123.84 636.883 123.84C636.486 123.84 636.104 123.682 635.823 123.401C635.541 123.12 635.383 122.738 635.383 122.34C635.383 121.942 635.541 121.561 635.823 121.28C636.104 120.998 636.486 120.84 636.883 120.84C637.281 120.84 637.663 120.998 637.944 121.28C638.225 121.561 638.383 121.942 638.383 122.34V122.34Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M647.576 285.328C647.576 285.726 647.418 286.108 647.136 286.389C646.855 286.67 646.474 286.828 646.076 286.828C645.678 286.828 645.296 286.67 645.015 286.389C644.734 286.108 644.576 285.726 644.576 285.328C644.576 284.931 644.734 284.549 645.015 284.268C645.296 283.986 645.678 283.828 646.076 283.828C646.474 283.828 646.855 283.986 647.136 284.268C647.418 284.549 647.576 284.931 647.576 285.328V285.328Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M646.076 285.328L645.369 333.058"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M646.869 333.058C646.869 333.456 646.711 333.837 646.429 334.119C646.148 334.4 645.767 334.558 645.369 334.558C644.971 334.558 644.589 334.4 644.308 334.119C644.027 333.837 643.869 333.456 643.869 333.058C643.869 332.66 644.027 332.279 644.308 331.997C644.589 331.716 644.971 331.558 645.369 331.558C645.767 331.558 646.148 331.716 646.429 331.997C646.711 332.279 646.869 332.66 646.869 333.058V333.058Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M645.369 333.058L634.055 324.573"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M635.504 324.695C635.504 325.093 635.345 325.474 635.064 325.756C634.783 326.037 634.401 326.195 634.004 326.195C633.606 326.195 633.224 326.037 632.943 325.756C632.662 325.474 632.504 325.093 632.504 324.695C632.504 324.297 632.662 323.916 632.943 323.634C633.224 323.353 633.606 323.195 634.004 323.195C634.401 323.195 634.783 323.353 635.064 323.634C635.345 323.916 635.504 324.297 635.504 324.695Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M661.254 321.07C661.254 321.468 661.095 321.849 660.814 322.131C660.533 322.412 660.151 322.57 659.754 322.57C659.356 322.57 658.974 322.412 658.693 322.131C658.412 321.849 658.254 321.468 658.254 321.07C658.254 320.672 658.412 320.291 658.693 320.009C658.974 319.728 659.356 319.57 659.754 319.57C660.151 319.57 660.533 319.728 660.814 320.009C661.095 320.291 661.254 320.672 661.254 321.07V321.07Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M659.754 321.07L646.004 285.32"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g>
        <path
            d="M448.525 321.391C448.525 321.789 448.367 322.17 448.086 322.451C447.805 322.733 447.423 322.891 447.025 322.891C446.627 322.891 446.246 322.733 445.965 322.451C445.683 322.17 445.525 321.789 445.525 321.391C445.525 320.993 445.683 320.611 445.965 320.33C446.246 320.049 446.627 319.891 447.025 319.891C447.423 319.891 447.805 320.049 448.086 320.33C448.367 320.611 448.525 320.993 448.525 321.391V321.391Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M447.004 321.445L455.254 367.195"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M456.754 367.195C456.754 367.593 456.595 367.974 456.314 368.256C456.033 368.537 455.651 368.695 455.254 368.695C454.856 368.695 454.474 368.537 454.193 368.256C453.912 367.974 453.754 367.593 453.754 367.195C453.754 366.797 453.912 366.416 454.193 366.134C454.474 365.853 454.856 365.695 455.254 365.695C455.651 365.695 456.033 365.853 456.314 366.134C456.595 366.416 456.754 366.797 456.754 367.195Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M455.254 367.195L433.004 382.695"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M434.504 382.695C434.504 383.093 434.345 383.474 434.064 383.756C433.783 384.037 433.401 384.195 433.004 384.195C432.606 384.195 432.224 384.037 431.943 383.756C431.662 383.474 431.504 383.093 431.504 382.695C431.504 382.297 431.662 381.916 431.943 381.634C432.224 381.353 432.606 381.195 433.004 381.195C433.401 381.195 433.783 381.353 434.064 381.634C434.345 381.916 434.504 382.297 434.504 382.695Z"
            fill="black"
        />
    </g>
    <g >
        <path
            d="M19.2256 38.7249H0.840851"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <g >
        <path
            d="M669.41 41.3765L713.251 41.7301"
            stroke="black"
            strokeDasharray="4 1"
        />
    </g>
    <defs>
        <filter
            id="filter0_f"
            x="306.205"
            y="73.3965"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter1_f"
            x="307.542"
            y="55.6141"
            width="14.9222"
            height="20.6616"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter2_f"
            x="319.455"
            y="54.3965"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter3_f"
            x="320.704"
            y="55.4641"
            width="24.849"
            height="15.4617"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter4_f"
            x="342.705"
            y="67.8965"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter5_f"
            x="343.355"
            y="69.3921"
            width="2.54688"
            height="35.3557"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter6_f"
            x="342.455"
            y="102.146"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter7_f"
            x="307.394"
            y="74.5047"
            width="37.9683"
            height="30.6304"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter8_f"
            x="307.883"
            y="69.1516"
            width="37.4902"
            height="7.33658"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter9_f"
            x="311.205"
            y="135.521"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter10_f"
            x="304.776"
            y="124.264"
            width="9.4544"
            height="14.1114"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter11_f"
            x="303.83"
            y="123.021"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter12_f"
            x="383.812"
            y="191.71"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter13_f"
            x="384.814"
            y="193.171"
            width="3.50815"
            height="19.3823"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter14_f"
            x="385.403"
            y="209.918"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter15_f"
            x="448.512"
            y="252.344"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter16_f"
            x="441.461"
            y="253.219"
            width="10.0679"
            height="14.1918"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter17_f"
            x="440.381"
            y="264.542"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter18_f"
            x="613.268"
            y="252.167"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter19_f"
            x="614.466"
            y="253.524"
            width="9.47992"
            height="26.3079"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter20_f"
            x="620.87"
            y="277.093"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter21_f"
            x="622.264"
            y="278.458"
            width="20.0473"
            height="6.14003"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter22_f"
            x="296.484"
            y="250.93"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter23_f"
            x="272.037"
            y="251.949"
            width="27.1828"
            height="9.48256"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter24_f"
            x="270.675"
            y="258.354"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter25_f"
            x="221.205"
            y="0.146491"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter26_f"
            x="206.743"
            y="1.45548"
            width="17.5211"
            height="38.9789"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter27_f"
            x="205.705"
            y="37.6465"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter28_f"
            x="154.408"
            y="0.994361"
            width="69.6912"
            height="52.1511"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter29_f"
            x="153.205"
            y="50.1465"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter30_f"
            x="185.845"
            y="0.908637"
            width="38.066"
            height="10.3226"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter31_f"
            x="184.455"
            y="8.14649"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter32_f"
            x="292.955"
            y="34.8965"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter33_f"
            x="273.628"
            y="18.2685"
            width="22.2515"
            height="19.6029"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter34_f"
            x="272.455"
            y="17.3965"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter35_f"
            x="644.381"
            y="96.2502"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter36_f"
            x="645.562"
            y="97.3651"
            width="24.3622"
            height="20.6054"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter37_f"
            x="667.008"
            y="114.989"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter38_f"
            x="636.254"
            y="115.995"
            width="33.433"
            height="7.38691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter39_f"
            x="634.835"
            y="120.292"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter40_f"
            x="644.027"
            y="283.28"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter41_f"
            x="644.32"
            y="284.773"
            width="2.80389"
            height="48.8414"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter42_f"
            x="643.32"
            y="331.01"
            width="4.09691"
            height="4.09694"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter43_f"
            x="633.207"
            y="323.624"
            width="13.0106"
            height="10.3822"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter44_f"
            x="631.955"
            y="322.646"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter45_f"
            x="657.705"
            y="319.021"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter46_f"
            x="644.988"
            y="284.592"
            width="15.7803"
            height="37.2059"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter47_f"
            x="444.977"
            y="319.342"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter48_f"
            x="445.963"
            y="320.808"
            width="10.331"
            height="47.0244"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter49_f"
            x="453.205"
            y="365.146"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter50_f"
            x="432.169"
            y="366.236"
            width="23.9185"
            height="17.4174"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter51_f"
            x="430.955"
            y="380.646"
            width="4.09691"
            height="4.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter52_f"
            x="0.292396"
            y="37.6764"
            width="19.4817"
            height="2.09691"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
        <filter
            id="filter53_f"
            x="668.858"
            y="40.3281"
            width="44.9456"
            height="2.45044"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="0.274228"
                result="effect1_foregroundBlur"
            />
        </filter>
    </defs>
</svg> */
