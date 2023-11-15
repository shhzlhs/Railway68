package lhs.testing.controller;

import lhs.testing.dto.TeamDTO;
import lhs.testing.entity.Player;
import lhs.testing.entity.Team;
import lhs.testing.form.player.UpdatePlayerForm;
import lhs.testing.form.team.CreateTeamForm;
import lhs.testing.form.team.UpdateTeamForm;
import lhs.testing.service.ITeamService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/teams")
public class TeamController {
    @Autowired
    ITeamService teamService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping
    public List<TeamDTO> getAllTeams() {
        List<Team> teams = teamService.getAllTeams();
        List<TeamDTO> teamDTOS = modelMapper.map(teams, new TypeToken<List<TeamDTO>>() {
        }.getType());
        return teamDTOS;

    }

    @GetMapping(value = "/{competitionId}")
    public List<TeamDTO> getByCompetitionId(@PathVariable int competitionId) {
        List<Team> teams = teamService.getByCompetition(competitionId);
        List<TeamDTO> teamDTOS = modelMapper.map(teams, new TypeToken<List<TeamDTO>>() {
        }.getType());
        return teamDTOS;
    }
    @GetMapping(value = "/ids/{ids}")
    public List<TeamDTO> getByIds(@PathVariable List<Integer> ids){
        List<Team> teams = teamService.getByIds(ids);
        List<TeamDTO> teamDTOS = modelMapper.map(teams, new TypeToken<List<TeamDTO>>() {
        }.getType());
        return teamDTOS;
    }

    @PostMapping
    public void createTeam(@RequestBody CreateTeamForm form) {
        teamService.createTeam(form);
    }

    @PutMapping(value = "/{id}")
    public void updateTeam(@PathVariable(name = "id") int id, @RequestBody @Valid UpdateTeamForm form) {
        form.setId(id);
        teamService.updateTeam(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteTeams(@PathVariable List<Integer> ids) {
        teamService.deleteTeams(ids);
    }
}
