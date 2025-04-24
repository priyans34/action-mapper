const actionMapper = {
  "Create an Entry": {
    apiUrl: `/v3/content_types/content_type_name/entries`,
    method: "POST",
    body: "entry_data",
    queryParams: {
      locale: "locale",
      include_branch: "include_branch",
    },
    params: {
      content_type_name: "content_type_name"
    },
  },
  "Delete an Entry": {
    apiUrl: `/v3/content_types/content_type_name/entries/entry_id`,
    method: "DELETE",
    body: "body",
    queryParams: {
      delete_all_localized: "delete_all_localized",
    },
    params: {
      content_type_name: "content_type_name",
      entry_id: "entry_id"
    },
  },
  "Get All Entries": {
    apiUrl: `/v3/content_types/content_type_name/entries`,
    method: "GET",
    body: "body",
    queryParams: {
      limit: "limit",
      skip: "skip",
      include_count: "include_count",
      include_metadata: "include_metadata",
      version: "version",
      locale: "locale",
      include_workflow: "include_workflow",
      include_publish_details: "include_publish_details",
      include_branch: "include_branch",
    },
    params: {
      content_type_name: "content_type_name",
    },
  },
  "Get All Languages": {
    apiUrl: `/v3/locales`,
    method: "GET",
    body: "body",
    queryParams: {
      limit: "limit",
      skip: "skip",
      include_count: "include_count",
      include_branch: "include_branch",
    }
  },
  "Get an Entry": {
    apiUrl: `/v3/content_types/content_type_name/entries/entry_id`,
    method: "GET",
    body: "body",
    queryParams: {
      version: "version",
      locale: "locale",
      include_workflow: "include_workflow",
      include_publish_details: "include_publish_details",
      include_branch: "include_branch",
    },
    params: {
      content_type_name: "content_type_name",
      entry_id: "entry_id",
    },
  },
};

module.exports = actionMapper;
