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
      content_type_name: "content_type_name",
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
      entry_id: "entry_id",
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
    },
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
  "Add Items to Release": {
    apiUrl: `/v3/releases/release_id/items`,
    method: "POST",
    body: "item_data",
    queryParams: {
      include_branch: "include_branch",
    },
    params: {
      release_id: "release_id",
    },
  },
  "Get All Global Fields": {
    apiUrl: `/v3/global_fields`,
    method: "GET",
    queryParams: {
      include_branch: "include_branch",
    },
  },
  "Get All Taxonomies": {
    apiUrl: `/v3/taxonomies`,
    method: "GET",
    queryParams: {
      limit: "limit",
      skip: "skip",
      include_count: "include_count",
      include_terms_count: "include_terms_count",
      include_referenced_terms_count: "include_referenced_terms_count",
      include_referenced_entries_count: "include_referenced_entries_count",
      deleted: "deleted",
      typeahead: "typeahead",
      query: "query",
    },
  },
  "Get All Variants of an Entry": {
    apiUrl: `/v3/content_types/content_type_name/entries/entry_uid/variants`,
    method: "GET",
    queryParams: {
      locale: "locale",
      include_branch: "include_branch",
    },
    params: {
      content_type_name: "content_type_name",
      entry_uid: "entry_uid",
    },
  },

  "Get a Single Asset": {
    apiUrl: `/v3/assets/asset_id`,
    method: "GET",
    queryParams: {
      version: "version",
      environment: "environment",
      include_branch: "include_branch",
    },
    params: {
      asset_id: "asset_id",
    },
  },

  "Get All Content Types": {
    apiUrl: `/v3/content_types`,
    method: "GET",
    queryParams: {
      limit: "limit",
      skip: "skip",
      include_count: "include_count",
      include_branch: "include_branch",
      include_global_field_schema: "include_global_field_schema",
    },
  },

  "Get a Single Variant": {
    apiUrl: `/v3/variant_groups/variant_group_uid/variants/variant_id`,
    method: "GET",
    queryParams: {
      include_branch: "include_branch",
    },
    params: {
      variant_group_uid: "variant_group_uid",
      variant_id: "variant_id",
    },
  },
  "Publish an Entry": {
    apiUrl: `/v3/content_types/content_type_name/entries/entry_id/publish`,
    method: "POST",
    body: "body",
    queryParams: {
      locale: "locale",
      environments: "environments",
      include_branch: "include_branch",
    },
    params: {
      content_type_name: "content_type_name",
      entry_id: "entry_id",
    },
  },
  "Unlocalize an Entry": {
    apiUrl: `/v3/content_types/content_type_name/entries/entry_id/unlocalize`,
    method: "POST",
    queryParams: {
      locale: "locale",
      include_branch: "include_branch",
    },
    params: {
      content_type_name: "content_type_name",
      entry_id: "entry_id",
    },
  },
};

module.exports = actionMapper;
