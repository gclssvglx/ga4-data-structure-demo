window.onload = function (event) {
  window.dataLayer = window.dataLayer || []

  // dataLayer.push({ "data": {} })

  dataLayer.push(
    {
      "event": "tabs",
      "location": "/renew-driving-licence",
      "data": {
        "index": 1,
        "index-total": 2,
        "text": "More information"
      }
    }
  )

  dataLayer.push(
    {
      "event": "complete",
      "location": "https://www.gov.uk",
      "data": {
        "text": "",
        "index": 1,
        "index_total": 2,
        "section": "",
        "action": "",
        "external": false,
        "page": {
          "status_code": 200,
          "title": "GOV.UK"
        },
        "banners": {
          "count": 1,
          "types": []
        },
        "publishing": {
          "content_id": "",
          "document_type": "",
          "publishing_app": "",
          "rendering_app": "",
          "schema_name": ""
        },
        "taxonomy": {
          "section": "",
          "taxon_ids": [],
          "taxon_slugs": [],
          "themes": []
        },
        "content": {
          "first_published_at": "2012-07-02T15:41:44.000+00:00",
          "history": false,
          "language": "en",
          "primary_publishing_organisation": "Government Digital Service",
          "public_updated_at": "2014-11-26T11:26:56.000+00:00",
          "updated_at": "2022-07-01T11:21:51.722Z",
          "withdrawn": false
        },
        "search_results": {
          "term": "",
          "sort": "",
          "results": 100,
          "item_list_name": "",
          "filters": {
            "topics": [],
            "content_types": [],
            "updated_after": "2022",
            "updated_before": "31/01/2022"
          }
        },
        "ecommerce": {
          "items": [
            {
              "item_id": "",
              "index": 1,
              "item_list_name": "",
              "item_name": ""
            }
          ]
        }
      }
    }
  )
}
