import React from 'react';
import useFetch from '../hooks/useFetch';

const ProjectDetails = (props) => {
  const [data, loading, error] = useFetch(
    `/projects/${parseInt(props.match.params.id)}.json`
  );
  return <h1>{!error && loading ? 'Chargement ...' : data.name}</h1>;
};

export default ProjectDetails;
