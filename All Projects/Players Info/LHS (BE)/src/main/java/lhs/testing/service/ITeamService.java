package lhs.testing.service;

import lhs.testing.entity.Team;
import lhs.testing.form.team.CreateTeamForm;
import lhs.testing.form.team.UpdateTeamForm;

import java.time.temporal.Temporal;
import java.util.List;

public interface ITeamService {
    List<Team> getAllTeams();

    List<Team> getByCompetition(int id);

    List<Team> getByIds(List<Integer> ids);

    void createTeam(CreateTeamForm form);

    void updateTeam(UpdateTeamForm form);

    void deleteTeams(List<Integer> ids);
}
