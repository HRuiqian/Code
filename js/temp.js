,
    {
      "mark": {
        "type": "text",
        "align": "right",
        "baseline": "middle",
        "dx": -390,
        "dy": 85,
        "fontSize": 11.5,
        "fontStyle": "italic"
      },
      "encoding": {
        "text": {
          "field": "state",
          "type": "nominal"
        },
        "opacity": {
          "condition": {
            "test": "datum.state == 'Putrajaya'",
            "value": 1
          },
          "value": 0
        },
        "color": {
          "value": "black"
        }
      }
    }
    

    {
      "data": {
        "url": "js/malaysia.topojson",
        "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
      },
      "transform": [
        {
          "calculate": "'Here is not Malaysia.'",
          "as": "note1"
        }
      ],
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "lightgray"},
      "encoding": {
        "tooltip": {
          "field": "note1"
        }
      }
    },
    {
      "data": {
        "url": "js/malaysia.topojson",
        "format": {"type": "topojson", "feature": "oceans"}
      },
      "mark": {"type": "geoshape", "fill": "skyblue"}
    },
    {
      "mark": {
        "type": "rect",
        "height":400,
        "fill": "lightgrey"
      }
    },