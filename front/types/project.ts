export type TProject = {
  id: number;
  description: string;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  created_at: string;
  default_branch: string;
  tag_list: [];
  topics: [];
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: string;
  forks_count: number;
  avatar_url: string;
  star_count: number;
  last_activity_at: string;
  namespace: TNamespace;
};

export type TNamespace = {
  id: number;
  name: string;
  path: string;
  kind: string;
  full_path: string;
  parent_id: number;
  avatar_url: string;
  web_url: string;
};


export type TCommit = {
  id: string,
  short_id: string,
  created_at: string,
  parent_ids: [],
  title: string,
  message: string,
  author_name: string,
  author_email: string,
  authored_date: string,
  committer_name: string,
  committer_email: string,
  committed_date: string,
  trailers: {},
  extended_trailers: {},
  web_url: string
}





export type TRepositoryInfo =
  {
      "id": 1,
      "description": null,
      "name": "my first repo",
      "name_with_namespace": "Administrator / my first repo",
      "path": "my-first-repo",
      "path_with_namespace": "root/my-first-repo",
      "created_at": "2025-04-03T13:02:09.926Z",
      "default_branch": "main",
      "tag_list": [],
      "topics": [],
      "ssh_url_to_repo": "git@localhost:root/my-first-repo.git",
      "http_url_to_repo": "http://localhost/root/my-first-repo.git",
      "web_url": "http://localhost/root/my-first-repo",
      "readme_url": "http://localhost/root/my-first-repo/-/blob/main/README.md",
      "forks_count": 0,
      "avatar_url": null,
      "star_count": 0,
      "last_activity_at": "2025-04-03T14:15:22.514Z",
      "namespace": {
          "id": 1,
          "name": "Administrator",
          "path": "root",
          "kind": "user",
          "full_path": "root",
          "parent_id": null,
          "avatar_url": "https://www.gravatar.com/avatar/e18a5a665078c0d921686cb79bebfc3b4f0be4fcb91d88dab719f47bfb66d9e1?s=80\u0026d=identicon",
          "web_url": "http://localhost/root"
      },
      "repository_storage": "default",
      "_links": {
          "self": "http://localhost/api/v4/projects/1",
          "issues": "http://localhost/api/v4/projects/1/issues",
          "merge_requests": "http://localhost/api/v4/projects/1/merge_requests",
          "repo_branches": "http://localhost/api/v4/projects/1/repository/branches",
          "labels": "http://localhost/api/v4/projects/1/labels",
          "events": "http://localhost/api/v4/projects/1/events",
          "members": "http://localhost/api/v4/projects/1/members",
          "cluster_agents": "http://localhost/api/v4/projects/1/cluster_agents"
      },
      "packages_enabled": true,
      "empty_repo": false,
      "archived": false,
      "visibility": "public",
      "owner": {
          "id": 1,
          "username": "root",
          "name": "Administrator",
          "state": "active",
          "locked": false,
          "avatar_url": "https://www.gravatar.com/avatar/e18a5a665078c0d921686cb79bebfc3b4f0be4fcb91d88dab719f47bfb66d9e1?s=80\u0026d=identicon",
          "web_url": "http://localhost/root"
      },
      "resolve_outdated_diff_discussions": false,
      "container_expiration_policy": {
          "cadence": "1d",
          "enabled": false,
          "keep_n": 10,
          "older_than": "90d",
          "name_regex": ".*",
          "name_regex_keep": null,
          "next_run_at": "2025-04-04T13:02:09.979Z"
      },
      "repository_object_format": "sha1",
      "issues_enabled": true,
      "merge_requests_enabled": true,
      "wiki_enabled": true,
      "jobs_enabled": true,
      "snippets_enabled": true,
      "container_registry_enabled": true,
      "service_desk_enabled": false,
      "service_desk_address": null,
      "can_create_merge_request_in": true,
      "issues_access_level": "enabled",
      "repository_access_level": "enabled",
      "merge_requests_access_level": "enabled",
      "forking_access_level": "enabled",
      "wiki_access_level": "enabled",
      "builds_access_level": "enabled",
      "snippets_access_level": "enabled",
      "pages_access_level": "private",
      "analytics_access_level": "enabled",
      "container_registry_access_level": "enabled",
      "security_and_compliance_access_level": "private",
      "releases_access_level": "enabled",
      "environments_access_level": "enabled",
      "feature_flags_access_level": "enabled",
      "infrastructure_access_level": "enabled",
      "monitor_access_level": "enabled",
      "model_experiments_access_level": "enabled",
      "model_registry_access_level": "enabled",
      "emails_disabled": false,
      "emails_enabled": true,
      "shared_runners_enabled": true,
      "lfs_enabled": true,
      "creator_id": 1,
      "import_url": null,
      "import_type": null,
      "import_status": "none",
      "open_issues_count": 0,
      "description_html": "",
      "updated_at": "2025-04-03T14:25:01.058Z",
      "ci_default_git_depth": 20,
      "ci_delete_pipelines_in_seconds": null,
      "ci_forward_deployment_enabled": true,
      "ci_forward_deployment_rollback_allowed": true,
      "ci_job_token_scope_enabled": false,
      "ci_separated_caches": true,
      "ci_allow_fork_pipelines_to_run_in_parent_project": true,
      "ci_id_token_sub_claim_components": [
          "project_path",
          "ref_type",
          "ref"
      ],
      "build_git_strategy": "fetch",
      "keep_latest_artifact": true,
      "restrict_user_defined_variables": true,
      "ci_pipeline_variables_minimum_override_role": "developer",
      "runners_token": "GR1348941WGnR4Dd5W8Tdpy9ZM5Xf",
      "runner_token_expiration_interval": null,
      "group_runners_enabled": true,
      "auto_cancel_pending_pipelines": "enabled",
      "build_timeout": 3600,
      "auto_devops_enabled": true,
      "auto_devops_deploy_strategy": "continuous",
      "ci_push_repository_for_job_token_allowed": false,
      "ci_config_path": null,
      "public_jobs": true,
      "shared_with_groups": [],
      "only_allow_merge_if_pipeline_succeeds": false,
      "allow_merge_on_skipped_pipeline": null,
      "request_access_enabled": true,
      "only_allow_merge_if_all_discussions_are_resolved": false,
      "remove_source_branch_after_merge": true,
      "printing_merge_request_link_enabled": true,
      "merge_method": "merge",
      "squash_option": "default_off",
      "enforce_auth_checks_on_uploads": true,
      "suggestion_commit_message": null,
      "merge_commit_template": null,
      "squash_commit_template": null,
      "issue_branch_template": null,
      "warn_about_potentially_unwanted_characters": true,
      "autoclose_referenced_issues": true,
      "max_artifacts_size": null,
      "permissions": {
          "project_access": {
              "access_level": 50,
              "notification_level": 3
          },
          "group_access": null
      }
  }