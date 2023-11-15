package lhs.testing.service;

import lhs.testing.entity.Player;
import lhs.testing.entity.Team;
import lhs.testing.form.player.CreatePlayerForm;
import lhs.testing.form.team.CreateTeamForm;
import lhs.testing.form.team.UpdateTeamForm;
import lhs.testing.repository.IPlayerRepository;
import lhs.testing.repository.ITeamRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService implements ITeamService {
    @Autowired
    ITeamRepository teamRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IPlayerRepository playerRepository;

    @Override
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @Override
    public List<Team> getByCompetition(int id) {
        return teamRepository.findAllByCompetitionId(id);
    }

    @Override
    public List<Team> getByIds(List<Integer> ids) {
        Iterable<Integer> idIterable = ids;
        return teamRepository.findAllById(ids);
    }


    @Override
    public void createTeam(CreateTeamForm form) {
        TypeMap<CreateTeamForm, Team> typeMap = modelMapper.getTypeMap(CreateTeamForm.class, Team.class);

        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreateTeamForm, Team>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }

        Team team = modelMapper.map(form, Team.class);
        team.setLogo(team.getName() + ".png");
        teamRepository.save(team);
    }

    @Override
    public void updateTeam(UpdateTeamForm form) {
        Team team = modelMapper.map(form, Team.class);
        team.setLogo(team.getName() + ".png");
        teamRepository.save(team);
    }

    @Override
    public void deleteTeams(List<Integer> ids) {
        teamRepository.deleteAllById(ids);
    }
}
